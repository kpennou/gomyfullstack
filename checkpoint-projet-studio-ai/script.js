document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');
    const itemsLeft = document.getElementById('itemsLeft');
    const clearCompletedBtn = document.getElementById('clearCompleted');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Chargement depuis le LocalStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let currentFilter = 'all';

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }

    function renderTasks() {
        taskList.innerHTML = '';
        
        const filteredTasks = tasks.filter(task => {
            if (currentFilter === 'active') return !task.completed;
            if (currentFilter === 'completed') return task.completed;
            return true;
        });

        filteredTasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            
            li.innerHTML = `
                <div class="task-content">
                    <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
                    <span class="task-text">${escapeHtml(task.text)}</span>
                </div>
                <button class="delete-btn" aria-label="Supprimer">🗑️</button>
            `;

            // Gestion de la case à cocher
            li.querySelector('.task-checkbox').addEventListener('change', (e) => {
                task.completed = e.target.checked;
                saveTasks();
            });

            // Gestion de la suppression
            li.querySelector('.delete-btn').addEventListener('click', () => {
                tasks = tasks.filter(t => t.id !== task.id);
                saveTasks();
            });

            taskList.appendChild(li);
        });

        // Mise à jour du compteur
        const activeCount = tasks.filter(t => !t.completed).length;
        itemsLeft.textContent = `${activeCount} tâche(s) restante(s)`;
    }

    function addTask() {
        const text = taskInput.value.trim();
        if (text === '') return;

        tasks.push({
            id: Date.now(),
            text: text,
            completed: false
        });
        taskInput.value = '';
        saveTasks();
    }

    // Sécurité contre les injections XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Écouteurs d'événements
    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTask(); });
    
    clearCompletedBtn.addEventListener('click', () => {
        tasks = tasks.filter(t => !t.completed);
        saveTasks();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderTasks();
        });
    });

    renderTasks(); // Affichage initial
});
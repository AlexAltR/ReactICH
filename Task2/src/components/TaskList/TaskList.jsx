// Импортируем хук useState для управления состоянием компонента
import { useState } from "react";

// Импортируем компонент TaskItem, который представляет отдельную задачу
import TaskItem from './../TaskItem';

// Компонент TaskList — список задач
function TaskList() {

    // Используем useState для хранения списка задач
    const [tasks, setTasks] = useState([
        { id: 1, text: "Купить воздушный шар", completed: false },
        { id: 2, text: "Съездить на Ямайку", completed: false },
        { id: 3, text: "Начать получать 10000$ в месяц", completed: false },
    ]);

    // Храним текст новой задачи в состоянии
    const [newTask, setNewTask] = useState("");

    /**
     * Удаляет задачу из списка по `id`
     * @param {number} id - идентификатор удаляемой задачи
     */
    const onDelete = (id) => {
        // Обновляем список задач, исключая задачу с указанным id
        setTasks(tasks => tasks.filter(task => task.id !== id));
    }

    /**
     * Переключает статус выполнения задачи (completed / не completed)
     * @param {number} id - идентификатор изменяемой задачи
     */
    const onToggle = (id) => {
        // Перебираем задачи и изменяем свойство `completed` у нужной
        setTasks(tasks => tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    }

    /**
     * Добавляет новую задачу в список
     */
    const addNewTask = () => {
        // Проверяем, не пустая ли строка перед добавлением
        if (!newTask.trim()) {
            return;
        }
        // Добавляем новую задачу с уникальным id (используем Date.now())
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
        // Очищаем поле ввода
        setNewTask("");
    }

    return (
        <div className="todo">
            <h1>Список дел</h1>

            {/* Поле ввода для новой задачи */}
            <input
                type="text"
                value={newTask} // Значение input берётся из состояния newTask
                onChange={(event) => setNewTask(event.target.value)} // Обновляем состояние при вводе
            />

            {/* Кнопка добавления задачи */}
            <button onClick={addNewTask}>Добавить задачу</button>

            {/* Список задач */}
            <ul className="todoList">
                {tasks.map(task => (
                    // Отображаем каждую задачу с помощью компонента TaskItem
                    <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
                ))}
            </ul>
        </div>
    );
}

// Экспортируем компонент TaskList для использования в других частях приложения
export default TaskList;

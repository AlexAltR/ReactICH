// Импортируем библиотеку PropTypes для проверки типов пропсов
import PropTypes from 'prop-types';

/**
 * Компонент `TaskItem` — отдельная задача в списке дел.
 * @param {Object} props - свойства компонента
 * @param {Object} props.task - объект задачи
 * @param {number} props.task.id - идентификатор задачи
 * @param {string} props.task.text - текст задачи
 * @param {boolean} props.task.completed - статус выполнения задачи
 * @param {Function} props.onToggle - функция для переключения статуса выполнения
 * @param {Function} props.onDelete - функция для удаления задачи
 */
function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li
            onClick={(e) => {
                e.stopPropagation(); // Останавливаем всплытие клика, чтобы родительский элемент не реагировал
                onToggle(task.id); // Переключаем статус выполнения задачи
            }}
        >
            {/* Текст задачи с зачеркиванием, если `completed === true` */}
            <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.text}
            </p>

            {/* Кнопка удаления задачи */}
            <button
                onClick={(e) => {
                    e.stopPropagation(); // Останавливаем всплытие события, чтобы `onToggle` не сработал
                    onDelete(task.id); // Удаляем задачу по `id`
                }}
            >
                Закрыть
            </button>
        </li>
    );
}

// Проверяем пропсы с помощью PropTypes
TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired, // `id` обязательно должен быть числом
        text: PropTypes.string.isRequired, // `text` обязательно должен быть строкой
        completed: PropTypes.bool.isRequired // `completed` обязательно должен быть `true` или `false`
    }).isRequired, // `task` является обязательным объектом
    onToggle: PropTypes.func.isRequired, // `onToggle` обязательно должен быть функцией
    onDelete: PropTypes.func.isRequired // `onDelete` обязательно должен быть функцией
}

// Экспортируем компонент `TaskItem` для использования в списке задач
export default TaskItem;

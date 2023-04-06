import { useSelector, useDispatch } from 'react-redux';
import {
  changeActiveFilter,
  clearCompleted,
  selectTodos,
  selectActiveFilter,
} from '../app/todos/todosSlice';

function MainFooter() {
  const dispatch = useDispatch();

  const items = useSelector(selectTodos);
  const itemLeft = items.filter((item) => !item.completed).length;

  const activeFilter = useSelector(selectActiveFilter);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemLeft} </strong>
        item{itemLeft > 1 && 's'} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={activeFilter === 'all' ? 'selected' : ''}
            onClick={() => dispatch(changeActiveFilter('all'))}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === 'active' ? 'selected' : ''}
            onClick={() => dispatch(changeActiveFilter('active'))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === 'completed' ? 'selected' : ''}
            onClick={() => dispatch(changeActiveFilter('completed'))}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        className="clear-completed"
        onClick={() => dispatch(clearCompleted())}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default MainFooter;

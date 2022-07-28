import CheckTodo from '../CheckTodo';
import RemoveTodo from '../RemoveTodo';
import { TodoItemProps } from '../TodoList';
import * as S from './styles'



const TodoItem = ({...props}: TodoItemProps) => (
    <S.TodoItemWrapper>
        <S.TodoCheckName>
            <CheckTodo />
            {props.description}
        </S.TodoCheckName>
        <RemoveTodo id={props.id} />
    </S.TodoItemWrapper>
)

export default TodoItem;
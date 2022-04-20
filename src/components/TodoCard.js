import ListGroup from 'react-bootstrap/ListGroup';
import { FaTrash } from 'react-icons/fa';

const TodoCard = (props) => {
    const {id, title, completed} = props.todo;
    console.log(props);

    const completedStyle = {
        fontStyle: "italic",
        color: "gray",
        textDecoration: "line-through"
      };

    return (
        <ListGroup className='mt-4 '>
            
            <ListGroup.Item className='d-flex justify-content-between align-item-center'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <input type='checkbox' checked={completed} onChange={()=>{props.checkHandler(id)}}/>
                    </div>
                    <div>
                        <span style={completed? completedStyle: null }>{title}</span>
                    </div>
                    
                </div>
                <div>
                <FaTrash style={{color: 'red'}}
                onClick={()=>{props.deleteHandler(id)}}
                />
                </div>
                
            </ListGroup.Item>
            
        </ListGroup>
    )
}

export default TodoCard;
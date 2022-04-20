import TodoCard from "./TodoCard"


const Todos = (props) => {
    const styles = {
        margin: '20px auto',
        padding: '20px',
        border: '1px solid gray',
        borderRadius: '10px'
    }
    return (
        <div style={styles}>
            <h2>Todo List</h2>
            {
              props.todos.map((todo) => {
                  return (
                      <TodoCard todo={todo}
                      key={todo.id}
                      checkHandler={props.checkHandler}
                      deleteHandler={props.deleteHandler}
                      />
                  )
              })
            }
        </div>
       

       
        
    )
}

export default Todos

import Header from '../Headers/Header'
import TaskListNumber from '../Headers/TaskListNumber'
import TaskList from '../Tasklist/TaskList'

const Employeedeshboard = () => {
  return (
    <div>
        <div className='p-10 bg-[#1c1c1c] h-screen w-screen'>
            <Header />
             <TaskListNumber />
             <TaskList />
        </div>
       
    </div>
  )
}

export default Employeedeshboard
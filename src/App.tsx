import Header from "./components/Header"
import Main from "./components/Main"
import { Provider } from "./context"
function App() {
  return (
    <Provider>
      <div className='flex flex-col h-dvh bg-[rgb(17_17_17)] overflow-hidden text-[rgb(255_258_248/95%)]'>
        <Header />
        <Main />
      </div>
    </Provider>

  )
}

export default App

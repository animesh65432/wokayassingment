import Header from "./components/Header"
import Main from "./components/Main"
import { SidebarProvider } from "@/components/ui/sidebar"
function App() {
  return (
    <SidebarProvider>
      <div className='flex flex-col h-dvh bg-[rgb(17_17_17)] overflow-hidden'>
        <Header />
        <Main />
      </div>
    </SidebarProvider>
  )
}

export default App

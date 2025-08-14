import { AppSidebar } from "./Sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Home() {

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">

                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="aspect-video rounded-xl bg-muted/50 p-6">
                            <h2 className="text-xl font-semibold mb-2">Card 1</h2>
                            <p className="text-muted-foreground">
                                This is a sample card to demonstrate the layout with the shadcn sidebar.
                            </p>
                        </div>
                        <div className="aspect-video rounded-xl bg-muted/50 p-6">
                            <h2 className="text-xl font-semibold mb-2">Card 2</h2>
                            <p className="text-muted-foreground">
                                Click the toggle button in the header to see the collapse/expand animation.
                            </p>
                        </div>
                        <div className="aspect-video rounded-xl bg-muted/50 p-6">
                            <h2 className="text-xl font-semibold mb-2">Card 3</h2>
                            <p className="text-muted-foreground">
                                The sidebar is fully responsive and works great on mobile devices too.
                            </p>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>

    )
}

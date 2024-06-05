import Content from "./Content";
import Sidebar from "./SideBar";

export default function Container({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-full w-screen">
            <div className="flex flex-row gap-2 h-full w-screen">
                <div className="flex flex-2 h-full">
                    <Sidebar />
                </div>
                <div className="flex flex-1 bg-red-0 h-full mt-14 ml-16">
                    <Content>{children}</Content>
                </div>
            </div>
        </div>
    );
} 
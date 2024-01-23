import Menu from "../common/Menu";

export function MainLayout({ children }: any) {
    return (<>
        <header>
            <Menu />
        </header>
        <div className="p-2">
            {children}
        </div>
    </>)
}

export default MainLayout;
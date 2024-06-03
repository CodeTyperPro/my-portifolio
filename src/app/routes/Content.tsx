export default function Content ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex flex-1 h-full w-full">
          {children}
        </div>
    );
} 
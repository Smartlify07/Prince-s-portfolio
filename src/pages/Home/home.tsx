import Button from '../../ui/button';

const HomePage = () => {
  return (
    <main className="bg-sidebar-bg min-h-screen">
      <h1>Home</h1>
      <div className="flex items-center px-20 py-20 gap-5">
        <Button variant="default">Let's Talk</Button>
        <Button variant="outline">Download Resume</Button>
      </div>
    </main>
  );
};
export default HomePage;

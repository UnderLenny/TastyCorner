import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
    const addCounter = (e: MouseEvent) => {
        console.log(e);
    };
    return (
        <>
            <Button onClick={addCounter}>Кнопка</Button>
            <Button appearance='big' onClick={addCounter}>
                Кнопка
            </Button>
            <Input placeholder='Email' />
        </>
    );
}

export default App;

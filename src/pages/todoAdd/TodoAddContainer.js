import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addTodoAction} from "../../store/todo/todoAction";
import {TodoAdd} from "./TodoAdd";
import {add} from "../../services/api";


export const TodoAddContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.user.currentUser);

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDescChange = (event) => {
        setDesc(event.target.value);
    }

    const handleImageChange = (event) => {
        const cFiles = event.target.files;
        if (cFiles.length > 0) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setImage(fileReader.result);
            }
            fileReader.readAsDataURL(cFiles[0]);
        }
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const date = new Date();
        const newDeed = {
            title: title,
            desc: desc,
            image: image,
            done: false,
            createdAt: date.toLocaleDateString(),
            newKey: date.getTime()
        }
        const addedDeed = await add(user, newDeed);
        dispatch(addTodoAction(addedDeed));

        setTimeout(() => {
            navigate('/')
        }, 300);
    }

    return (
        <TodoAdd
            handleFormSubmit={handleFormSubmit}
            handleTitleChange={handleTitleChange}
            handleDescChange={handleDescChange}
            handleImageChange={handleImageChange}
        />
    );
}
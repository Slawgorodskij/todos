import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodoAction } from "../../store/todoAction";
import { TodoAdd } from "./TodoAdd";


export const TodoAddContainer = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate('');
   
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
        if(cFiles.length>0){
            const fileReader = new FileReader();
            fileReader.onload = () =>{
                setImage(fileReader.result);
            }
            fileReader.readAsDataURL(cFiles[0]);
        } 
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        const date = new Date();
        const newDeed = {
            title: title,
            desc: desc,
            image: image,
            done: false,
            createdAt: date.toLocaleDateString(),
            key: date.getTime(),
        }

        dispatch(addTodoAction(newDeed));
        
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
import React from "react"
import useNewSubForm from "../hooks/useNewSubForm";
import { addNewSub } from "../services/postSub";
import { Sub } from "../types";

interface FormProps {
    onNewSub: (newSub: Sub) => void
}


const Form = ({onNewSub}: FormProps) => {
    const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        addNewSub(inputValues).then(onNewSub)
        handleClear()
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = evt.target

        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value,
            }
        })

    }

    const handleClear = () => {
        dispatch({type: "clear"})
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" id="" placeholder="nick" />
                <input onChange={handleChange} value={inputValues.profileUrl} type="text" name="profileUrl" id="" placeholder="profileUrl" />
                <textarea onChange={handleChange} value={inputValues.description}  name="description" id="" placeholder="description" />
                <button type="submit">save now</button>
            </form>
        </div>
    )
}

export default Form;
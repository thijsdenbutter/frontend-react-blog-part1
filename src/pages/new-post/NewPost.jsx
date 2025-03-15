import {useForm} from 'react-hook-form';
import {calcReadingTime} from "../../Helpers/calcReadingTime.js";
import './NewPost.css';
import {Button} from "../../components/button/Button.jsx";

function NewPost() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    function handleFormSubmit(data) {
        const newData = {
            ...data,
            shares: 0,
            comments: 0,
            create: new Date().toISOString(),
            readTime: calcReadingTime(data.content)
        };
        console.log(newData);
    }

    return (
        <form className="form-container" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="input-wrapper">
                <label htmlFor="title">
                    Titel:
                </label>
                <input
                    type="text"
                    id="title"
                    {...register("title", {
                        required: {
                            value: true,
                            message: "Dit veld is verplicht"
                        },
                    })}
                />
                {errors.title && <p className="error">{errors.title.message}</p>}
            </div>
            <div className="input-wrapper">
                <label htmlFor="subtitle">
                    Subtitel:
                </label>
                <input
                    type="text"
                    id="subtitle"
                    {...register("subtitle", {
                        required: {
                            value: true,
                            message: "Dit veld is verplicht"
                        },
                    })}
                />
                {errors.subtitle && <p className="error">{errors.subtitle.message}</p>}
            </div>
            <div className="input-wrapper">
                <label htmlFor="author">
                    Auteur:
                </label>
                <input
                    type="text"
                    id="author"
                    {...register("author", {
                        required: {
                            value: true,
                            message: "Dit veld is verplicht"
                        },
                    })}
                />
                {errors.author && <p className="error">{errors.author.message}</p>}
            </div>
            <div className="input-wrapper">
                <label htmlFor="content">
                    Bericht:
                </label>
                <textarea
                    rows="10"
                    cols="50"
                    id="content"
                    placeholder="Deel jouw verhaal!"
                    {...register("content", {
                        required: {
                            value: true,
                            message: "Dit veld is verplicht"
                        },
                        minLength: {
                            value: 300,
                            message: "Je blog moet minimaal 300 karakters bevatten"
                        },
                        maxLength: {
                            value: 2000,
                            message: "Je blog mag maximaal 2000 karakters bevatten"
                        },
                    })}
                >
                </textarea>
                {errors.content && <p className="error">{errors.content.message}</p>}
            </div>
            <Button
                type="submit"
                caption="Post blog"
            />
        </form>
    )
}

export default NewPost;
import logo from "../../assets/logo-white.png";
import axios from "axios";
import {Button} from "../../components/button/Button.jsx";

function Home() {
    const uri = " http://localhost:3000";

    async function fetchPosts() {
        try {
            const result = await axios.get(`${uri}/posts`);
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }

    async function fetchPost(id) {
        try {
            const result = await axios.get(`${uri}/posts/${id}`);
            console.log(result);
            return result;
        } catch (err) {
            console.log(err);
        }
    }

    async function newPost(post) {
        try {
            const result = await axios.post(`${uri}/posts`, post);
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }

    async function deletePost(id) {
        try {
            const result = await axios.delete(`${uri}/posts/${id}`);
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }

    async function changePost(id) {
        try {
            let post = await fetchPost(id);
            console.log(post);
            post = {
                ...post.data,
                title: post.data.title.toUpperCase(),
            }
            console.log(post);
            const result = await axios.put(`${uri}/posts/${id}`, post);
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }

    const post = {
        "title": "Wat gebruiker heeft ingevuld",
        "subtitle": "Wat gebruiker heeft ingevuld",
        "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
        "author": "Voornaam achternaam",
        "created": "2023-09-21T09:30:00Z",
        "readTime": 1,
        "comments": 0,
        "shares": 0
    }

    return (
        <>
            <img src={logo} alt="Company logo"/>
            <Button
                type="button"
                onClick={() => fetchPosts()}
                caption="haal posts op"
            />
            <Button
                type="button"
                onClick={() => fetchPost(6)}
                caption="haal post 6 op"
            />
            <Button
                type="button"
                onClick={() => newPost(post)}
                caption="plaats nieuwe post"
            />
            <Button
                type="button"
                onClick={() => deletePost(17)}
                caption="delete post"
            />
            <Button
                type="button"
                onClick={() => changePost(1)}
                caption="verander post 1"
            />
        </>
    )
}

export default Home;
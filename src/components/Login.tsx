import { invoke } from "@tauri-apps/api/tauri";
import { SetStateAction, useState } from "react";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginMsg, setLoginMsg] = useState("");

    async function handleLogin() {
        try {
            const response: SetStateAction<string> = await invoke("login", { username, password });
            setLoginMsg(response);
            window.location.href = "/";
        } catch (error) {
            setLoginMsg("Login failed");
        }
    }
    return (
        <div className="container">
        <h1>Login</h1>
        <form
            className="row"
            onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
            }}
        >
            <input
            id="username-input"
            onChange={(e) => setUsername(e.currentTarget.value)}
            placeholder="Enter your username..."
            />
            <input
            id="password-input"
            type="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Enter your password..."
            />
            <button type="submit">Login</button>
        </form>
        <p>{loginMsg}</p>
        </div>
    );
}

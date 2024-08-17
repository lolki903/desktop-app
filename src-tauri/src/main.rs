// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn login(username: &str, password: &str) -> String {
    if username == "admin" && password == "password" {
        redirect_to("/dashboard");
        "Redirecting to dashboard".to_string()
    } else {
        "Login failed".to_string()
    }
}

fn redirect_to(path: &str) {
    // This is a dummy function to simulate a redirect
    println!("Redirecting to {}", path);
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![login])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

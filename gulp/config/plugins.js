import replace from "gulp-replace"; // Поиск и замена
import browserSync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; // Локальный сервер

// Экспортируем объект
export const plugins = {
    replace: replace,
    browserSync: browserSync,
    newer: newer
}
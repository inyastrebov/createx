import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const otfToWoff = () => {
        // Ищем файлы шрифтов .ttf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        // Конвертируем в .woff
        .pipe(fonter({
            formats: ['woff']
        }))
        // Выгружаем в папку с результатами
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
        // Ищем файлы шрифтов .ttf
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        // Конвертируем в .woff2
        .pipe(ttf2woff2())
        // Выгружаем в папку с результатами
        .pipe(app.gulp.dest(`${app.path.build.fonts}`));
}

export const fontsStyle = () => {
    let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`
    // Проверяем, существуют ли файлы шрифтов
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if (fontsFiles) {
            // Проверяем, существует ли файл стилей для подключения шрифтов
            if (!fs.existsSync(fontsFile)) {
                // Есди файла нет, создаём его
                fs.writeFile(fontsFile, '', cb)
                let newFileOnly;
                for (var i = 0; i < fontsFiles.length; i++) {
                    // Записываем подключения шривтов в фал стилей
                    let fontsFileName = fontsFiles[i].split('.')[0];
                    if(newFileOnly !== fontsFileName) {
                        let fontName = fontsFileName.split('-')[0] ? fontsFileName.split('-')[0] : fontsFileName;
                        let fontWeight = fontsFileName.split('-')[1] ? fontsFileName.split('-')[0] : fontsFileName;
                        if (fontWeight.toLowerCase() === 'thin') {
                            fontWeight = 100;
                        } else if (fontWeight.toLowerCase() === 'extraLight') {
                            fontWeight = 200;
                        } else if (fontWeight.toLowerCase() === 'Light') {
                            fontWeight = 300;
                        } else if (fontWeight.toLowerCase() === 'medium') {
                            fontWeight = 500;
                        } else if (fontWeight.toLowerCase() === 'semibold') {
                            fontWeight = 600;
                        } else if (fontWeight.toLowerCase() === 'bold') {
                            fontWeight = 700;
                        } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
                            fontWeight = 800;
                        } else if (fontWeight.toLowerCase() === 'black') {
                            fontWeight = 900;
                        } else {
                            fontWeight = 400;
                        }
                        fs.appendFile(fontsFile,
                            `@font-face {
                                        font-family: ${fontName};
                                        font-display: swap;
                                        src: url("../fonts/${fontsFileName}.woff2") format("woff2");
                                        font-weight: ${fontWeight};
                                        font-style: normal;
                            }\r\n`, cb);
                        newFileOnly = fontsFileName;
                    }
                }
            } else {
                // Если файл есть, выводим сообщение
                console.log('Файл scss/fontd.css уже существует. Для обновления файла нужно его удалить')
            }
        }
    });

    return app.gulp.src(`${app.path.srcFolder}`);
    function cb() { }
}
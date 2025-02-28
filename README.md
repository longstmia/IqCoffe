# Как развернуть

IQCoffe для стажеров

#### Версия Node.js:

```
^16
```

Установить пакеты в корне папки.

### `npm i`

Перейти в папку backend установить пакеты для бека.

### `npm i`

## Скрипты

#### Запустить проект (бэкенд + клиент):

```
npm run start
```

#### Запустить отдельно клиент:

```
npm run client
```

#### Запустить отдельно бэкенд:

```
npm run server
```

#### Проверка ESLint:

```
npm run lint
```

#### Проверка ESLint c авто исправлением:

```
npm run lint:fix
```

#### Проверка Stylelint:

```
npm run stylelint
```

#### Проверка Stylelint c авто исправлением:

```
npm run stylelint:fix
```

Реакт приложение запускается за порту 3000
Бекенд запускается на парту 3001

Описание методов в Swagger (OpenAPI)

http://localhost:3001/api-docs

<!-- ### `` -->

## Code style

В проекте используется [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/) и [Prettier](https://prettier.io/).

### Плагины ESLint:

- [Airbnb eslint config](https://www.npmjs.com/package/eslint-config-airbnb);
- [React eslint plugin](https://www.npmjs.com/package/eslint-plugin-react);
- [React hooks eslint plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks);
- [JSX a11y eslint plugin](https://www.npmjs.com/package/eslint-plugin-jsx-a11y);
- [Typescript eslint](https://typescript-eslint.io/).

При необходимости, расширяйте и модифицируйте конфигурационный файлы `.eslintrc.json`, если нужно:

- добавить правило;
- отредактировать или удалить правило (конфликтное или неудобное правило, неподходящее в конкретных кейсах);
- добавить новые правила для новых пакетов (к примеру redux, styled-components и т.п.).

Возле каждого правила в `.eslintrc.json` есть ссылка на документацию правила, поэтому если какое-то правило мешает разрабатывать
необходимо зайти в документацию и, при наличии возможности, сконфигурировать с нужными опциями, а не просто выключить правило.

### Опционально:

Рекомендую попробовать включить в `.eslintrc.json` плагин [fp](https://github.com/jfmengels/eslint-plugin-fp)
и попробовать пописать с ним на функциональном стиле 🙂

### Пакеты Stylelint:

- [Order plugin](https://www.npmjs.com/package/stylelint-order);
- [Prettier config](https://www.npmjs.com/package/stylelint-config-prettier);
- [Recess order config](https://www.npmjs.com/package/stylelint-config-recess-order);
- [Recommended config](https://www.npmjs.com/package/stylelint-config-recommended);
- [Standard SCSS config](https://www.npmjs.com/package/stylelint-config-standard-scss);
- [Styled components config](https://www.npmjs.com/package/stylelint-config-styled-components).

### !!! Stylelint настроен на работу cо styled components !!!

Для того чтобы переключить режим работы на `css` и `scss`, нужно отредактировать конфигурационный файл:

```
// stylelint.js

module.exports = {
  - "processors": [
  -   "stylelint-processor-styled-components"
  - ],

  ...
```

/**
 * @constant
 * @type {Object}
 */
const ToDo = {
  id,
  content,
  isDone,
  categories,
  tags,
};

/**
 * @param {Object} ToDo - ToDo Object
 * @param {string} ToDo.content - ToDo 상세 내용
 * @param {string} ToDo.categories - ToDo 분류
 * @param {string} [ToDo.tags] - 추가하고 싶은 태그
 */
function createToDo({ content, categories, tags }) {}

/**
 * @returns {Object} ToDo 가져오기
 */
function readToDo() {}

/**
 * @param {Object} ToDo - ToDo Object
 * @param {string} ToDo.content - ToDo 상세 내용
 * @param {string} ToDo.categories - ToDo 분류
 * @param {string} [ToDo.tags] - 추가하고 싶은 태그
 */
function updateToDos({ content, categories, tags }) {}

/**
 * @param {Object} ToDo - ToDo Object
 * @param {number} ToDo.id - 지울 ToDo ID
 */
function deleteToDos({ id }) {}

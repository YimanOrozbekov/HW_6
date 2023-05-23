const inputANode = document.querySelector('.js-input')
const inputANode = document.querySelector('.js-input')
const selectOperationANode = document.querySelector('.js-select-operation')
const btnResoultANode = document.querySelector('.js-btn-resoult')
const outputANode = document.querySelector('.js-output')

btnResoultANode.addEventListener('click', function () {
    const a = Number(inputANode.value);
    const b = Number(inputANode.value);
    const operation = selectOperationANode.value;

    const resoult = calculate({
        a,
        b,
        operation
    });

    console.log()
})
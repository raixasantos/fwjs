<template>
    <div class="container-form">
        <h2>Tabs</h2>
        <form class="tab-form" @submit.prevent="submit">
            <div class="section-input">
                <h5>Núm. de tabs</h5>
                <input type="number" min="1"
                    @change="changeNumTabs((($event.target as HTMLInputElement).value))" />
            </div>
            <div className="error">{{ errors.numTabs }}</div>
                <div class="section-input">
                    <h5>Título</h5>
                    <input type="text" />          
                </div>
                <div class="section-input">
                    <h5>Conteúdo</h5>
                    <textarea />             
                </div>
            <div class="section-buttons">
                <div class="buttons">
                    <input type="submit" value="Salvar" />
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { required, inRange, minLen } from '../../utils/validations'

const options = reactive<string[]>([''])
const texts = reactive<string[]>([''])
const errors = reactive<{[name: string]: string}>({})
const touched = reactive<{[name: string]: boolean}>({})

function touch(name: string, value: boolean = true) {
    touched[name] = value
}

function setError(name: string, error: string) {
    errors[name] = error
}

function changeOption(index: number, value: string) {
    touch(`option_${index}`)
}

function changeText(index: number, value: string) {
    touch(`text_${index}`)
}

function changeNumTabs(value: string) {
    const range = inRange(1, 7)
    const validateFunc = (value: string) => required(value) || range(value)
    if (check(value, validateFunc, 'numTabs')) {
      const num = parseInt(value, 10)
      
      if (num <= options.length) {
        for (let i = num; i < options.length; i++) {
          touch(`option_${i}`, false) 
          setError(`option_${i}`, '')
          touch(`text_${i}`, false) 
          setError(`text_${i}`, '')
        }
        
        options.splice(num, options.length - num)
        texts.splice(num, texts.length - num)
      }
      else {
        const tailOptions = Array(num - options.length).fill('')
        tailOptions.forEach(o => options.push(o))
        const tailTexts = Array(num - options.length).fill('')
        tailTexts.forEach(t => texts.push(t))
      }
    }
}

function check(value: string, validateFunc: Function, name: string) {
    const error = validateFunc(value)
    setError(name, error)
    return error === null
}


function submit() {
}

</script>

<style scoped>
    .container-form {
        display: flex;
        flex-direction: column;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
        min-width: 400px;
    }
    .section-input {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .section-buttons {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
</style>
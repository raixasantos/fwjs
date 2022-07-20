import React, { useState, FormEvent } from 'react';
import { Dispatch, SetStateAction } from "react";

import { required, minLen, inRange } from '../../utils/validations';
import './TabsForm.css';


export function TabsForm() {
    const [ options, setOptions ] = useState<string[]>(['']);
    const [ texts, setTexts ] = useState<string[]>(['']);
    const [ errors, setErrors ] = useState<{[name: string]: string}>({});
    const [ touched, setTouched ] = useState<{[name: string]: boolean}>({});

    function touch(name: string, value: boolean = true) {
        setTouched(prevTouched => ({ ...prevTouched, [name]: value }))
    }

    function setError(name: string, error: string) {
        setErrors(prevErrors => ({ ...prevErrors, [name]: error }))
    }

    function check(value: string, validateFunc: Function, name: string) {
        const error = validateFunc(value)
        setError(name, error)
        return error === null
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
            setOptions(options.slice(0, num))
            setTexts(texts.slice(0, num))            
          }
          else {
            const tailOptions = Array(num - options.length).fill('')
            setOptions([...options, ...tailOptions])
            const tailTexts = Array(num - options.length).fill('')
            setOptions([...options, ...tailTexts])
          }
        }
    }

    function changeOption(index: number, value: string) {
        const newOptions = [...options]
        newOptions[index] = value
        setOptions(newOptions)
        touch(`option_${index}`)
    }

    function changeText(index: number, value: string) {
        const newText = [...texts]
        newText[index] = value
        setTexts(newText)
        touch(`text_${index}`)
    }

    function submit(e: FormEvent) {
        e.preventDefault()
        const optionsOk = 
            options
            .map((opt, i) => check(opt, required, `option_${i}`))
            .every(o => o)
        
        const textsOk = 
            texts
            .map((text, i) => check(text, required, `text_${i}`))
            .every(t => t)
    
        if (optionsOk && textsOk) {
            alert(
                options.map((opt, i) => (
                   `${options[i]} ${texts[i]} \n`
                ))
            );
        }
      }

    return (
        <div className="container-form">
            <h2>Tabs</h2>
            <form onSubmit={submit}>
                <div className="section-input">
                    <h5>Núm. de tabs</h5>
                    <input type="number" min="1"
                        value={options.length}
                        onChange={e => changeNumTabs(e.target.value)} />
                </div>  
                <div className="error">{ errors.numTabs }</div>
                {
                     options.map((opt, i) => (
                        <>
                            <div>
                                <div className="section-input" key={`option_${i}`}>
                                <h5>Título</h5>
                                <input type="text" value={options[i]}
                                    onChange={e => changeOption(i, e.target.value)}
                                    onBlur={e => touched[`option_${i}`] && check(e.target.value, required, `option_${i}`)}
                                />
                                </div>
                                <div className="error">{ errors[`option_${i}`] }</div>
                            </div>
                            <div>
                                <div className="section-input" key={`text_${i}`}>
                                <h5>Conteúdo</h5>
                                <textarea value={texts[i]}
                                    onChange={e => changeText(i, e.target.value)}
                                    onBlur={e => touched[`text_${i}`] && check(e.target.value, required, `text_${i}`)}
                                />
                                </div>
                                <div className="error">{ errors[`text_${i}`] }</div>
                            </div>
                        </>
                      ))                    
                }
                <div className="section-buttons">
                    <div className="buttons">
                        <input type="submit" value="Salvar" />
                    </div>
                </div>
            </form>
        </div>
    );
}
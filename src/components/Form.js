import React, { useContext, useEffect } from 'react';
import './Form.css';
import { useState } from 'react';
import { DelData, EditData, GetData, LoadContext, PostData } from 'services/Global';

let LOADER = 'true'
let EDIT = false
let EDITDATA = {} 
let ID = null
let BtnText = "Guardar Nuevo"

export const FormHeader = () => {
    return (
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Acciones</th>
            </tr>
        </thead>
    )
}
export const FormData = ({ id, title, description }) => {

const {load, setLoad} = useContext(LoadContext)


    const handleClickEdit = () => {
        document.getElementById("inputTitle").value  = title;
        document.getElementById("inputDescription").value  = description;
        EDIT = true
        ID = id;
        BtnText = "Guardar"
        load ? setLoad(false) : setLoad(true)
        
    }
    const handleClickDelete = () => {
        let confirm = window.confirm("Esta seguro de borrar?");
        confirm ? DelData(id).then(()=>{
            load ? setLoad(false) : setLoad(true)
            LOADER = true}) 
            
            : console.log("confirm canceled") 

    }
    return (
        
        <><tbody>
            <tr className='postContent'>
                <td className='name'>{title}</td>
                <td className='lastname'>{description}</td>
                <td>
                    <button id="editBtn" onClick={handleClickEdit}>Editar</button>
                    <button onClick={handleClickDelete}>Eliminar</button>
                </td>
            </tr>
        </tbody></>
    )
};

export const FormCreate=()=>{
const FormInputs ={
    title:  document.getElementById("inputTitle"),
    description: document.getElementById("inputDescription")
}

const [dataForm,setDataForm] = useState({})
const {load, setLoad} = useContext(LoadContext)

    const dataToAdd={
        titleValue: (e)=>{
            setDataForm({...dataForm,
               title: e.target.value}) },
    
        descriptionValue: (e)=>{
            setDataForm({...dataForm,
                description: e.target.value}) }
    }
    const clearInputs =()=>{
        FormInputs.title.value= ''
        FormInputs.description.value  = '' }

    const sendEdit =()=>{
        EDITDATA= {
            title: FormInputs.title.value,
            description: FormInputs.description.value}

        EditData(ID, EDITDATA).then(()=>{
            LOADER = true
            EDIT = false
            load ? setLoad(false) : setLoad(true)
            BtnText = "Guardar Nuevo"
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        EDIT ? 
        sendEdit()
        :
        PostData(dataForm).then(()=>{
            LOADER = true
            load ? setLoad(false) : setLoad(true)
        }) 
        
                
    }

return(
        <>
        <form className="post" onSubmit={handleSubmit}>
           <input type="text" name="" id="inputTitle" onChange={dataToAdd.titleValue} className="form-control" required="required" placeholder="Ingrese Nombre" title="Nombre"/><br/>
           <input type="text" name="" id="inputDescription" onChange={dataToAdd.descriptionValue} className="form-control" required="required" placeholder="Ingrese Apellido" title="Apellido"/><br/>
           <button>{BtnText}</button>
           {EDIT ? <button>Cancelar</button> : ''}
        </form>
        {EDIT ? '' : <button onClick={clearInputs}>Borrar</button>}
        </>
    )
}

export const FormIndex = ()=>{
    const [forms, setForm] = useState([]);
    const [load, setLoad] = useState(false);
 
    
    useEffect(() => {
        GetData().then( data=>{
              setForm(data)
              LOADER = false})
        
      }, [load]);
    return (
        <div className='Form-content'>
        <LoadContext.Provider value={{load, setLoad}} >

        <table className="default">
        <FormHeader/>
          {forms.map(form => (
            <FormData key={form.id} {...form} />
          ))}   
      </table>
        {LOADER ? 'Cargando...': <FormCreate/>}

        </LoadContext.Provider>
        </div>

    )
}



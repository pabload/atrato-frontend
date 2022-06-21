const useSideMenu = (getUsers:Function,setcurrentPanel:Function) => {
  const handleMenu = async (panel:string)=>{
    console.log("hola");
    switch(panel){
        case "HOME":
        setcurrentPanel("HOME");
        await getUsers("ALL","")
        break;
        case "ADD-USER":
        setcurrentPanel("ADD-USER");
        break;
    }
  }
  return (
    {handleMenu}
  )
}

export default useSideMenu
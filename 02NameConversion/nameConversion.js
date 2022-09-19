const convertBtn = document.getElementById("convert-btn");
const inputText = document.getElementById("text");

const camelCaseElement = document.getElementById("camel-case");
const pascalCaseElement = document.getElementById("pascal-case");
const snakeCaseElement = document.getElementById("snake-case");
const screamingSnakeCaseElement = document.getElementById("screaming-snake-case");
const kebabCaseElement = document.getElementById("kebab-case");
const screamingkebabCaseElement = document.getElementById("screaming-kebab-case");


convertBtn.addEventListener('click', function(){
    const text = inputText.value;

    const textArr = text.split(" ")
    
    // camelCase
    const camelCaseText = textArr.map((v,i)=>{
        if(i !== 0) {
            let modifiedStr = v[0].toUpperCase() + v.slice(1, v.length).toLowerCase();
            return modifiedStr;
        }
        return v.toLowerCase();
    }).join("");

    // pascalCase
    const pascalCaseText = textArr.map((v,i)=>{
        
        let modifiedStr = v[0].toUpperCase() + v.slice(1, v.length).toLowerCase();
        return modifiedStr;
        
    }).join("");

    // snackCase
    const snakeCaseText = textArr.map((v,i)=>{
        return v.toLowerCase();
    }).join("_");

    // screamingsnackCase
    const screamingSnakeCaseText = textArr.map((v,i)=>{
        return v.toUpperCase();
    }).join("_");

    // kebabCase
    const kebabCaseText = textArr.map((v,i)=>{
        return v.toLowerCase();
    }).join("-");

    // screamingKebabCase
    const screamingKebabCaseText = textArr.map((v,i)=>{
        return v.toUpperCase();
    }).join("-");

    camelCaseElement.innerText = camelCaseText;
    pascalCaseElement.innerText = pascalCaseText;
    snakeCaseElement.innerText = snakeCaseText;
    screamingSnakeCaseElement.innerText = screamingSnakeCaseText;
    kebabCaseElement.innerText = kebabCaseText;
    screamingkebabCaseElement.innerText = screamingKebabCaseText;
});

const tasks = [
    {
        id: 1,
        descricao: "comprar o marlboro"
    },
    {
        id: 2,
        descricao: "jogar no bicho"
    }
]

export default function () {
    return (
        <>
        <form action="/a" method="POST">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required/>

                <button id="adicionar" type="submit">+</button>
        </form>
        {
            tasks.map((task) => 
        <ul>
            <li>
                <h2>{task.descricao}</h2>
            </li>
        </ul>
        )}
        </>

    )
}




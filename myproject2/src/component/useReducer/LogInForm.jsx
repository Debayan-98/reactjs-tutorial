





export const LogInForm = () => {

    const [State, dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            <form onSubmit={handler} autoComplete="off">
                <div>
                    <input type="text" placeholder='name' value={State.name} onChange={(e) => {
                        dispatch({ type: 'name', value: e.target.value })
                    }} />
                </div>
                <div>
                    <input type="text" placeholder='email' value={State.email} onChange={(e) => {
                        dispatch({ type: 'email', value: e.target.value })
                    }} />

                </div>

                <button>addContact</button>












































            </form>
        </div>
    )
}

export const initState = {
    isError: false,
	isLoading: false,
    robotName: "text-curie-001",
    records:{
        curie: {1653068238:"The world was a different place When Curie was exploring the world Of science and discovery👩‍🔬"},
        davinci: {1653068238:"There once was an artist named Da Vinci He was the epitome of talent and flair👩‍🎨"},
        babbage:{1653068238:"Babbage is a person who is very innovative and creative🤖️"},
        ada:{1653068238:"Ada is a great, breathless dog. She barks and barks until the room is filled with barking🐶"},
    },
    queries:{
        curie: {1653068238:"Hi, Curie👋"},
        davinci: {1653068238:"Hello! Davinci!"},
        babbage:{1653068238:"Nice to meet you, Babbage."},
        ada:{1653068238:"Ada, glad to connect you😄"},
    },
    robotModel:{
        curie: "text-curie-001",
        davinci: "text-davinci-002",
        babbage:"text-babbage-001",
        ada:"text-ada-001",
    }
}

export function reducer(state, action){
    switch (action.type) {
        case 'ASK':
            return{
                ...state, queries: { 
                    ...state.queries,
                    [action.payload.model] : { 
                        ...state.queries[action.payload.model],
                        [action.payload.time]: action.payload.query,
                    }
                }
            }
        case 'SUBMIT':
            return{
                ...state, records: { 
                    ...state.records, 
                    [action.payload.model] : { 
                        ...state.records[action.payload.model],
                        [action.payload.time]: action.payload.newMsg,
                    }
                }
            }
        case 'LOADING':
            return{
                ...state, isLoading: true,
            }
        case 'UNLOADING':
            return{
                ...state, isLoading: false,
            }
        case 'SWITCH':
            return{
                ...state, robotName: action.payload
            }
        default:
            break;
    }
}
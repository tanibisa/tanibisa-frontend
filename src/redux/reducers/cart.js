const initialState = {
  latestResponse: null,
  latestError: null,
  isLoading: false,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ONECART_BEGIN': {
      return {
        ...state,
        isLoading: true,
        latestError: null,
      }
    }

    case 'GET_ONECART_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        latestResponse: action.payload,
      }
    }

    case 'GET_ONECART_ERROR': {
      return {
        ...state,
        isLoading: false,
        latestError: action.payload.error,
      }
    }
    case 'CREATE_CART_BEGIN': {
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        isLoading: true,
        latestError: null,
      }
    }

    case 'CREATE_CART_SUCCESS': {
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        isLoading: false,
        latestResponse: action.payload.response,
      }
    }

    case 'CREATE_CART_ERROR': {
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        isLoading: false,
        latestError: action.payload.error,
        latestResponse: null,
      }
    }

    default: {
      // ALWAYS have a default case in a reducer
      return state
    }
  }
}

export default cartReducer

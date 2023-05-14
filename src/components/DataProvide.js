import { useReducer, createContext, useContext } from "react";
const reducer = (state, action) => {
    let tempCartItems;
    switch (action.type) {
        case "cartadd":
            tempCartItems = [...state.cartItems];
            if (state.cartItems[action.data.id]) {
                tempCartItems[action.data.id].qty++;
            } else {
                tempCartItems[action.data.id] = action.data;
            }
            return {
                ...state,
                totalItem: state.totalItem + 1,
                cartItems: tempCartItems
            }
        case "cartremove":
            tempCartItems = [...state.cartItems];
            tempCartItems[action.data.id].qty--;
            return {
                ...state,
                totalItem: state.totalItem - 1,
                cartItems: tempCartItems
            }
        case "cartdelete":
            tempCartItems = [...state.cartItems];
            tempCartItems[action.data.id] = undefined;
            return {
                ...state,
                totalItem: state.totalItem - action.data.qty,
                cartItems: tempCartItems
            }
        case "orderFromCart":
            return {
                ...state,
                orderItems: [...state.orderItems, ...action.data],
                cartItems : [],
                totalItem : 0,
            }
        case "directOrder":
            tempCartItems = [...state.orderItems];
            if (state.orderItems[action.data.id]) {
                tempCartItems[action.data.id].qty++;
            } else {
                tempCartItems[action.data.id] = action.data;
            }
            return {
                ...state,
                orderItems: tempCartItems
            }
        case "orderDone":
            return {
                ...state,
                orderItems : []
            }
        case "addUser":
            return {
                ...state,
                hasSignedUp: true,
                usersList: [
                    ...state.usersList,
                    action.data
                ]
            }
        case "login":
            return {
                ...state,
                isLoggedIn: true,
                activeUser: action.data,
            }
        case "logout":
            return {
                ...state,
                isLoggedIn: false,
                activeUser: undefined
            }
        case "activeUser":
            tempCartItems = [...state.usersList];
            if (action.part === "img") {
                tempCartItems[state.activeUser.id] = {
                    ...tempCartItems[state.activeUser.id],
                    img_src: action.data
                }
            }else{
                tempCartItems[state.activeUser.id] = {
                    ...tempCartItems[state.activeUser.id],
                    ...action.data,
                    hasAdditionalInfo : true
                }
            }
            return {
                ...state,
                usersList: tempCartItems,
                activeUser: tempCartItems[state.activeUser.id]
            }

        default:
           return null;

    }
}

const DataContext = createContext();

export default function DataProvider({ children }) {
    const initialData = {
        hasSignedUp: false,
        isLoggedIn: false,
        totalItem: 0,
        cartItems: [],
        orderItems: [],
        usersList: [],
        activeUser: undefined,
    }
    const [state, dispatch] = useReducer(reducer, initialData);
    function myFun(role, info, sect) {
        dispatch({
            type: role,
            data: info,
            part: sect
        })
    }

    function linkClick(target){
        let active = document.querySelector('.nav-link.active');
        active.classList.remove('active');
        document.getElementById(target).classList.add('active');
    }
    return (
        <DataContext.Provider value={
            {
                hasSignedUp: state.hasSignedUp,
                isLoggedIn: state.isLoggedIn,
                totalItem: state.totalItem,
                cartItems: state.cartItems,
                orderItems: state.orderItems,
                usersList: state.usersList,
                activeUser: state.activeUser,
                myFun,
                linkClick
            }
        } >
            {children}
        </DataContext.Provider>
    )
}

export const useDataProvider = () => useContext(DataContext);
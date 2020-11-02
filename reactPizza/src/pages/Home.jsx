import React, {useCallback, useEffect} from 'react';
import {Categories, LoaderBlock, PizzaBlock, Sort} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/filterReducer";
import {fetchPizzas} from "../redux/pizzaReducer";
import {addPizzaToCart} from "../redux/cartReducer";

const categoriesNames = ['Мясные', 'Вегатарианския', 'Гриль', 'Острая', 'Закрытые'];
const sortNames = [{type: 'popular', name: 'популярности', order: 'desc'},
    {type: 'price', name: 'цене', order: 'desc'},
    {type: 'name', name: 'алфавиту', order: 'asc'}];


const Home = () => {
    const pizzas = useSelector(({pizza}) =>   pizza.pizzas);
    const isLoading = useSelector(({pizza}) =>   pizza.isLoading);
    const {category, sortBy} = useSelector(({filter}) =>   filter);
    const cartItems = useSelector(({cart}) =>   cart.items);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy] );

    const selectCategory = useCallback ((index) => {
        dispatch(setCategory(index))
    }, []);

    const sortPizzas = useCallback ((type) => {
        (dispatch(setSortBy(type)));
    }, []);

    const clickAddPizza = (obj) => {
       dispatch(addPizzaToCart(obj));
    }


    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories items={categoriesNames} selectCategory={selectCategory} sortPizzas={sortPizzas} category={category}/>
                    <Sort items={sortNames} activeSortType={sortBy} sortPizzas={sortPizzas}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading ? pizzas.map( (obj) =>  <PizzaBlock key={obj.id} addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} clickAddPizza={clickAddPizza}  {...obj}/>)
                    : Array(10).fill(0).map((_, index) => <LoaderBlock key={index}/>)}
                </div>
            </div>
        </div>
    )
}

export default Home;
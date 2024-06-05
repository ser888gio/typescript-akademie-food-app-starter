import { useFetch } from "../../hooks/useFetch.tsx"
import { Meal } from "../../types.ts";
import { MealItem } from "../MealItem/MealItem.tsx";
import classes from './Meals.module.css'
import { Modal } from "../UI/Modal/modal.tsx";


export const Meals = () => {
    const{data, error, loading } = useFetch<Meal[]>("https://food-app-f3cb8-default-rtdb.firebaseio.com/meals.json");

    console.log(data);

    if (loading) return <div>Loading..</div>;

    if (error) return <div>{error.message}</div>;

    if (!data) return <div>No data</div>

    return (
        <>
        <Modal open = {false} onClose = {() => console.log("Závíram")}>
            <h1>Nice</h1>
        </Modal>
        <ul className= {classes.meals}>
            {data.map((item) => (
                <MealItem key = {item.id}{...item} />
            ))}
        </ul>
        </>
        
    )
}
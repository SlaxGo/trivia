import React, { useEffect, useState } from "react";

export default function SelectVariants() {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch("https://opentdb.com/api_category.php")
            .then(response => response.json())
            .then(data => setCategory(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <div className="form-floating">
                <select className="form-select" id="floatingSelect">
                    {
                        category.trivia_categories && (
                            category.trivia_categories.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>)
                            )
                        )
                    }
                </select>
                <label htmlFor="floatingSelect">Select Category</label>
            </div>
        </div>
    );
}

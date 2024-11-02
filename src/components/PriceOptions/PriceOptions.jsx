import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym facilities",
                "Group fitness classes (limited to 2 per week)",
                "Locker room access",
                "Wi-Fi access",
                "Monthly fitness assessment"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "Access to gym facilities",
                "Unlimited group fitness classes",
                "Locker room access",
                "1 personal training session per month",
                "Nutritional guidance pamphlet",
                "Access to sauna and steam room",
                "Discounts on merchandise"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 69.99,
            "features": [
                "Access to gym facilities",
                "Unlimited group fitness classes",
                "Locker room access",
                "2 personal training sessions per month",
                "Nutrition consultation (1 session per month)",
                "Access to sauna and steam room",
                "VIP access to special events and workshops",
                "Discounts on massage therapy services"
            ]
        },
        {
            "id": 4,
            "name": "Family Membership",
            "price": 99.99,
            "features": [
                "Access for up to 4 family members",
                "Unlimited group fitness classes",
                "Locker room access",
                "1 personal training session per month per member",
                "Monthly family fitness challenges",
                "Discounts on family activities and workshops",
                "Access to kids' play area"
            ]
        },
        {
            "id": 5,
            "name": "Student Membership",
            "price": 19.99,
            "features": [
                "Access to gym facilities",
                "Group fitness classes (limited to 2 per week)",
                "Locker room access",
                "Valid student ID required",
                "Study area with Wi-Fi access",
                "Discounts on fitness events",
                "Access to special student workshops"
            ]
        }
    ]


    return (
        <div className="m-6">
            <h2 className="text-4xl"> Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;
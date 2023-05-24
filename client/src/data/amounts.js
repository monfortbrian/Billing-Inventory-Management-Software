import {
    AiOutlineLineChart,
    AiOutlineShopping,
    AiOutlineTag,
    AiOutlineBank,
} from "react-icons/ai";
export const amountData = [
    {
        id: 1,
        amount: 42.256,
        descrption: "Total Sales",
        icon: <AiOutlineLineChart size={30} />,
    },
    {
        id: 2,
        amount: 34.523,
        descrption: "Total Expenses",
        icon: <AiOutlineShopping size={30} />,
    },
    {
        id: 3,
        amount: 42.256,
        descrption: "Payment sent",
        icon: <AiOutlineTag size={30} />,
    },
    {
        id: 4,
        amount: 14.923,
        descrption: "Payment received",
        icon: <AiOutlineBank size={30} />,
    },
];

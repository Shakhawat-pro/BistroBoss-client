import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";

import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



const AdminHome = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data: status = {}, isLoading } = useQuery({
        queryKey: ['admin-status'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-status')
            return res.data
        }
    })
    // console.log(status);

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return res.data
        }
    })

    console.log(chartData);

    // custom shaper for bar chart

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // su

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return {name: data.category, value: data.revenue}
    })

    return (
        <div className="w-11/12 mx-auto mt-16">
            <h1 className="text-3xl font-bold ">Hi, Welcome {user?.displayName ? user.displayName : 'Back'}</h1>
            <div className="mt-8">
                {
                    isLoading ?
                        <div className="text-center flex justify-center items-center"><span className="loading text-[#FCCB05] loading-infinity w-32"></span></div>
                        :
                        <div className="grid  min-[480px]:grid-cols-2  lg:grid-cols-4 gap-5 ">
                            <div className="stats mx-auto shadow w-[220px]">
                                <div className="stat flex items-center">
                                    <FaWallet className="text-3xl text-secondary" />
                                    <div>
                                        <div className="stat-title">Revenue</div>
                                        <div className="stat-value ">${status.revenue}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="stats mx-auto shadow w-[220px]">
                                <div className="stat flex items-center">
                                    <FaUsers className="text-3xl text-warning" />
                                    <div>
                                        <div className="stat-title ">Revenue</div>
                                        <div className="stat-value ">{status.users}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="stats mx-auto shadow w-[220px]">
                                <div className="stat flex items-center">
                                    <FaUtensils className="text-3xl text-primary" />
                                    <div>
                                        <div className="stat-title ">Revenue</div>
                                        <div className="stat-value ">{status.menuItems}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="stats mx-auto shadow w-[220px]">
                                <div className="stat flex items-center">
                                    <FaShoppingCart className="text-3xl text-error" />
                                    <div>
                                        <div className="stat-title">Revenue</div>
                                        <div className="stat-value">{status.orders}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
            <div className="flex w-11/12">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>

                </div>
            </div>
        </div>
    );
};

export default AdminHome
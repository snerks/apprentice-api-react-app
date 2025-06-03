import { useEffect, useState } from 'react';
import './VacanciesList.css';
import type { VacanciesResponse } from '../models/vacancies';

// interface Vacancy {
//     id: number;
//     title: string;
//     company: string;
//     location: string;
// }

const VacanciesList = () => {
    const [vacanciesResponse, setVacanciesResponse] = useState<VacanciesResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Replace with your actual API endpoint
        fetch('https://apprentice-api.netlify.app/.netlify/functions/vacancies')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch vacancies');
                return res.json();
            })
            .then((data) => {
                setVacanciesResponse(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="vacancies-container">
            <table className="vacancies-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {vacanciesResponse && vacanciesResponse.vacancies.map((vacancy) => (
                        <tr key={vacancy.vacancyReference}>
                            <td>{vacancy.vacancyReference}</td>
                            <td>{vacancy.title}</td>
                            <td>{vacancy.employerName}</td>
                            <td>{vacancy.address.addressLine3}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VacanciesList;

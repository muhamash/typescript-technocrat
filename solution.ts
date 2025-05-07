// p-1
function formatString ( input: string, toUpper?: boolean ): string
{
    if ( toUpper === false )
    {
        return input.toLowerCase();
    }
    else
    {
        return input.toUpperCase();
    }
}

// p-2
function filterByRating(items: { title: string; rating: number }[]): {
    title: string; rating: number }[] {
    return items.filter( item =>
        typeof item.rating === 'number' && item.rating >= 4
    );
}

// p-3
function concatenateArrays<T> ( ...arrays: T[][] ): T[]
{
    // return arrays.reduce( ( acc, curr ) => [ ...acc, ...curr ], [] );
    return arrays.flat(Infinity) as T[];
}

// p-4
class Vehicle 
{
    constructor(private make: string, private year: number) {}

    getInfo(): void | string {
        // return `Make: ${this.make}, Year: ${this.year}`;
        console.log(`Make: ${this.make}, Year: ${this.year}`)
    }
}

class Car extends Vehicle 
{
    constructor(make: string, year: number, private model: string) {
        super(make, year);
    }

    getModel(): void | string {
        // return `Model: ${this.model}`;
        console.log( `Model: ${ this.model }` );
    }
}

// p-5
function processValue ( value: string | number ): number
{
    if (typeof value === "string") {
        return value.length;
    }
    else if ( typeof value === "number" )
    {
        return value * 2;
    }
    else
    {
        throw new Error("Unsupported type");
    }
}

// p-6
interface Product
{
    name: string;
    price: number;
}

function getMostExpensiveProduct ( products: Product[] ): Product | null
{
    if ( products.length === 0 ) return null;

    return products.reduce( ( maxProduct, currentProduct ) =>
    {
        return currentProduct.price > maxProduct.price ? currentProduct : maxProduct;
    } );
}

// p-7
enum Day 
{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};

function getDayType ( day: Day ): string 
{
    switch ( day ) 
    {
        case Day.Saturday:
        case Day.Sunday:
            return "Weekend";
        case Day.Monday:
        case Day.Tuesday:
        case Day.Wednesday:
        case Day.Thursday:
        case Day.Friday:
            return "Weekday";
        default:
            throw new Error("Invalid day");
    };
}

// p-8
async function squareAsync ( n: number ): Promise<number>
{
    return new Promise( ( resolve, reject ) =>
    {
        setTimeout( () =>
        {
            if ( n < 0 )
            {
                reject( new Error( "Negative number not allowed" ) );
            } else
            {
                resolve( n * n );
            }
        }, 1000 );
    } );
}
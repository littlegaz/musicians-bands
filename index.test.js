const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const band = await Band.create({
            name: "Imagine Dragons", 
            genre: "Pop"
        })
        expect('band.name').toBe('Imagine Dragons');
        expect('band.genre').toBe('Pop');
    })

    test('can create a Musician', async () => {
        const musician = await Musician.create({
            name: "Andrew Tolman",
            instrument: "Drums"                
        })
        expect('musician.name').toBe('Andrew Tolman');
        expect('musician.instrument').toBe('Drums');
    })

    test('can create a Song', async () => {
        const song = await Song.create({
            title: "Monster",
            year: 2013,
            length: 4
        })
        expect('song.title').toBe('Monster');
        expect('song.year').toBe('2013');
        expect('song.length').toBe('4');
    })

    test('can update a Band', async () => {
        const updatedBand = await Band.findByPk(1);
        updatedBand.name = "BlackPink";
        updatedBand.genre = "KPop";
        await updatedBand.save();

        expect('UpdatedBand.name').toBe('BlackPink');
        expect('UpdatedBand.genre').toBe('KPop');
    })

    test('can update a Musician', async () => {
        const updatedMusician = await Musician.findByPk(1);
        updatedMusician.name = "Rose";
        updatedMusician.instrument = "Guitar";
        await updatedMusician.save();
        expect('UpdatedMusician.name').toBe('Rose');
        expect('UpdatedMusician.instrument').toBe('Guitar');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })
})
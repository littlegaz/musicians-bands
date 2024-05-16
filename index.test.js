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
        expect(band.name).toBe("Imagine Dragons");
        expect(band.genre).toBe("Pop");

        expect(band).toBeInstanceOf(Band);
    })

    test('can create a Musician', async () => {
        const musician = await Musician.create({
            name: "Andrew Tolman",
            instrument: "Drums"                
        })
        expect(musician.name).toBe('Andrew Tolman');
        expect(musician.instrument).toBe('Drums');
    })

    test('can create a Song', async () => {
        const song = await Song.create({
            title: "Monster",
            year: 2013,
            length: 4
        })
        expect(song.title).toBe('Monster');
        expect(song.year).toBe(2013);
        expect(song.length).toBe(4);
    })

    test('can update a Band', async () => {
        const band = await Band.create({
            name: "Imagine Dragons", 
            genre: "Pop"
        });
            await band.update({
            name: "BlackPink",
            genre: "KPop",
        });
        expect(band.name).toBe('BlackPink');
        expect(band.genre).toBe('KPop');
    })

    test('can update a Musician', async () => {
        const musician = await Musician.create({
            name: "Andrew Tolman",
            instrument: "Drums" 
        });
            await musician.update({
            name: "Rose",
            instrument: "Guitar",
        });    
        expect(musician.name).toBe('Rose');
        expect(musician.instrument).toBe('Guitar');
    })

    test('can update a Song', async () => {
        const song = await Song.create({
            title: "Monster",
            year: 2013,
            length: 4
        });
            await song.update({
            title: "Pink Venom",
            year: 2022,
            length: 3,
        });
        expect(song.title).toBe('Pink Venom');
        expect(song.year).toBe(2022);
        expect(song.length).toBe(3); 
    })

    test('can delete a Band', async () => {
        const deletedBand = await Band.findByPk(1);
        await deletedBand.destroy();
        const band = await Band.findByPk(1);
        expect(band).toBeNull();
    })

    test('can delete a Musician', async () => {
        const deletedMusician = await Musician.findByPk(1);
        await deletedMusician.destroy();
        const musician = await Musician.findByPk(1);
        expect(musician).toBeNull();
    })

    test('can delete a Song', async () => {
        const deletedSong = await Song.findByPk(1);
        await deletedSong.destroy();
        const song = await Song.findByPk(1);
        expect(song).toBeNull();
    })
})

module.exports = (mongoose) => {
  const db = 'mongodb+srv://sip:panama2000@cluster0-cy5lf.mongodb.net/sip?retryWrites=true'
  mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false 
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));
  }
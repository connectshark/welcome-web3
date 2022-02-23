const main = async () => {
  const Counter = await hre.ethers.getContractFactory('Counter')
  const counter = await Counter.deploy()
  await counter.deployed()

  console.log(`Contact deployed at ${counter.address}`)

  let counts = await counter.getCounts()
  console.log(`counts數量(1):${counts}`)

  await counter.add()
  counts = await counter.getCounts()
  console.log(`counts數量(2):${counts}`)

  await counter.add()
  counts = await counter.getCounts()
  console.log(`counts數量(3):${counts}`)
}

main()
  .then(() => {
    console.log(`success!`)
    process.exit(1)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
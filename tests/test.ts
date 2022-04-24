import { expect, test } from '@playwright/test'

const dimensions = {
  width: 1280,
  height: 720
}

const center = {
  x: dimensions.width / 2,
  y: dimensions.height / 2
}

test('interaction system works as intended', async ({ page }) => {
  await page.goto('/tests/interaction')
  await page.mouse.move(center.x - 2, center.y - 2)
  await page.mouse.move(center.x + 2, center.y + 2, {
    steps: 4
  })
  await page.mouse.down()
  await page.mouse.up()
  await page.mouse.move(0, 0)
  await expect(page.locator('.playwright-test-result').first()).toHaveText(
    '{"pointermove":5,"pointerenter":1,"pointerdown":1,"pointerup":1,"click":1,"pointerleave":1}'
  )
})

test('<InstancedMesh> component and nested <Instance> components transforms as expected', async ({
  page
}) => {
  await page.goto('/tests/instance-hierarchy')
  expect(await page.screenshot()).toMatchSnapshot('instance-hierarchy.png')
})

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "THE TOC Page for XProd.",
};

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto grid min-h-screen w-full place-items-center">
      <div className="mx-auto max-w-2xl space-y-2">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p>
          THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
          INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
          FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
          OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
          DEALINGS IN THE SOFTWARE.
        </p>
      </div>
    </div>
  );
}
